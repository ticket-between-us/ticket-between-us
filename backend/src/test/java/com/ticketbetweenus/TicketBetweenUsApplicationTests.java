package com.ticketbetweenus;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

// 로컬에서는 docker compose 의 MySQL, CI에서는 GitHub Actions MySQL 서비스에 연결해 실행됩니다.
@SpringBootTest
class TicketBetweenUsApplicationTests {

    @Test
    void contextLoads() {
    }
}
