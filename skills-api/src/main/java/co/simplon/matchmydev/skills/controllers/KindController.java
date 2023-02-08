package co.simplon.matchmydev.skills.controllers;

import java.util.Collection;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.matchmydev.skills.dtos.KindView;
import co.simplon.matchmydev.skills.services.KindService;

@RestController
@RequestMapping("/kinds")
public class KindController {

    private KindService service;

    public KindController(KindService service) {
	this.service = service;
    }

    @GetMapping
    public Collection<KindView> getAll() {
	return service.getAll();
    }

}
