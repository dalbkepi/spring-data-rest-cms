package org.dalbkepi.sdrc.reactiveservice.controller;

import org.dalbkepi.sdrc.reactiveservice.entities.MyEntity;
import org.dalbkepi.sdrc.reactiveservice.entities.MyEntityResourceAssembler;
import org.dalbkepi.sdrc.reactiveservice.repositories.MyEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.context.request.async.DeferredResult;
import org.springframework.web.util.WebUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RepositoryRestController
@RequestMapping("/api/myEntities")
public class MyEntityController {

	private MyEntityRepository repository;
	private ExecutorService transactionExecutor;
	private MyEntityResourceAssembler assembler;

	@Autowired
	public MyEntityController(MyEntityRepository repository, ExecutorService transactionExecutor, MyEntityResourceAssembler assembler) {
		this.repository = repository;
		this.transactionExecutor = transactionExecutor;
		this.assembler = assembler;
	}

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody DeferredResult<Resources<Resource<MyEntity>>> findAll(final HttpServletRequest request) {
		DeferredResult<Resources<Resource<MyEntity>>> defResult = new DeferredResult<>();

		request.setAttribute(WebUtils.INCLUDE_CONTEXT_PATH_ATTRIBUTE, request.getContextPath());
		final RequestAttributes requestAttributes = new ServletRequestAttributes(request);


		CompletableFuture.supplyAsync(() -> {
			RequestContextHolder.setRequestAttributes(requestAttributes);
			return new Resources<>(
					StreamSupport.stream( repository.findAll().spliterator(), false)
							.map(assembler::toResource)
							.collect(Collectors.toList())
			);

		}, transactionExecutor)
				.whenComplete((resources, throwable) ->
						{
							defResult.setResult(resources);
						}
				);

		return defResult;
	}
}
