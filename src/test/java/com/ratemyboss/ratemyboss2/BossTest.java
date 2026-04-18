package com.ratemyboss.ratemyboss2;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

public class BossTest {

    @Test
    void shouldCreateBossWithCorrectFields() {
        //ACT
        Boss boss = new Boss("Tairrque Baker", "Google", "Sales");

        //NO ARRANGE

        //ASSERT
        assertThat(boss.getName()).isEqualTo("Tairrque Baker");
        assertThat(boss.getCompany()).isEqualTo("Google");
        assertThat(boss.getDepartment()).isEqualTo("Sales");
    }
}