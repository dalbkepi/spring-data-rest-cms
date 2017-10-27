package com.lido.cms.controller;

import com.lido.cms.client.ServiceClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@Controller
public class HomeController {

	@Autowired
	private ServiceClient serviceClient;

	@RequestMapping(value = "/")
	public String index(Model model) {

		Map<String, String> services = serviceClient.getServices();
		model.addAttribute("services", services.values());

		return "index";
	}
}
