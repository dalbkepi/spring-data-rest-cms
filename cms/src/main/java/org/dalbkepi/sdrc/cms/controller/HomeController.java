package org.dalbkepi.sdrc.cms.controller;

import org.dalbkepi.sdrc.cms.client.ServiceClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {

	@Autowired
	private ServiceClient serviceClient;

	@RequestMapping(value = "/")
	public String index(Model model) {

//		Map<String, String> services = serviceClient.getServices();
//		model.addAttribute("services", services.values());

		return "index";
	}

	@RequestMapping(value = "/services/*")
	public String services(Model model) {
		return "index";
	}

	@RequestMapping(value = "*")
	public String default404(Model model) {
		return "redirect:/";
	}
}
