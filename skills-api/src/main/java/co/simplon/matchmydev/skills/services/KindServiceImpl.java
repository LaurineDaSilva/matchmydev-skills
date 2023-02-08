package co.simplon.matchmydev.skills.services;

import java.util.Collection;

import org.springframework.stereotype.Service;

import co.simplon.matchmydev.skills.dtos.KindView;
import co.simplon.matchmydev.skills.repositories.KindRepository;

@Service
public class KindServiceImpl implements KindService {

    private KindRepository kinds;

    public KindServiceImpl(KindRepository kinds) {
	this.kinds = kinds;
    }

    @Override
    public Collection<KindView> getAll() {
	return kinds.findAllProjectedBy();
    }

}
