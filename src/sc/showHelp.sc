theme: /

    state: ВыводПомощь
        q!: * (~помощь/~справка/помоги*/help/хелп/хэлп/~меню/може*/умее*) *
                        
        script:
            
        a: Приложение "Фраза дня". каждый день выдает случайную широко используемую фразу на английском, французском или немецком языках с переводом на русский. Изучая по одной фразе в день, можно легко и просто пополнять свой словарный запас 
            
        go!: /ShowButtons
        
    state: Оценка
        q!: * оцен* *
                        
        script: $smartRating.callRating();
        
        state: ПолученаОценка
            event!: RATING_RESULT
            a: Спасибо за оценку
            go!: /ShowButtons