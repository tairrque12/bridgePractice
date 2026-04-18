package com.ratemyboss.ratemyboss2;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class BossRepositoryTest {

    @Autowired
    private BossRepository bossRepository;

    @Test
    void shouldSaveAndRetrieveBoss() {
        Boss boss = new Boss("Tairrque Baker", "Google", "Sales");
        bossRepository.save(boss);

        var found = bossRepository.findAll();

        assertThat(found).hasSize(1);
        assertThat(found.get(0).getName()).isEqualTo("Tairrque Baker");
    }
}