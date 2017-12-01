package org.dalbkepi.sdrc.reactiveservice.controller;

import org.dalbkepi.sdrc.reactiveservice.entities.MyEntity;
import org.dalbkepi.sdrc.reactiveservice.repositories.MyEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;

import java.util.Iterator;
import java.util.List;
import java.util.Spliterator;
import java.util.Spliterators;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
public class MyEntityController {

	@Autowired
	private MyEntityRepository repository;

	@RequestMapping
	public DeferredResult<List<MyEntity>> get() {
		DeferredResult<List<MyEntity>> defResult = new DeferredResult<>();

		new Thread(() -> {
			defResult.setResult(callApi());
		}).start();

		return defResult;
	}

	List<MyEntity> callApi() {
		try
		{
			Thread.sleep(1000);
		}
		catch (InterruptedException e)
		{
			e.printStackTrace();
		}
		Iterator<MyEntity> iterator = repository.findAll().iterator();

		return StreamSupport.stream(
				Spliterators.spliteratorUnknownSize(iterator,
						Spliterator.ORDERED), false).collect(
				Collectors.toList());
	}
}
