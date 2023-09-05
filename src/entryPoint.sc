require: slotfilling/slotFilling.sc
  module = sys.zb-common
  
# Подключение javascript обработчиков
require: js/reply.js
require: js/actions.js
require: js/english.js
require: js/franch.js
require: js/german.js

# Подключение сценарных файлов
require: sc/showHelp.sc
require: sc/showPhraseE.sc
require: sc/showPhraseF.sc
require: sc/showPhraseG.sc


patterns:
    $AnyText = $nonEmptyGarbage

theme: /
    state: Start
        # При запуске приложения с кнопки прилетит сообщение /start.
        q!: $regex</start>
        # При запуске приложения с голоса прилетит сказанная фраза.
        q!: * фраз* дня
        a: Я могу показать фразу дня на английском, французском или немецком
        go!: /ВыводФразыАнгл
            
    state: ShowButtons
        buttons:
            "на английском" -> /ВыводФразыАнгл
            "на французском" -> /ВыводФразыФранц
            "на немецком" -> /ВыводФразыНемец
            "помощь" -> /ВыводПомощь
            "оценить" -> /Оценка
            
    #state: $smartRating.callRating();
     #   q!: [оцен*]
      #  event!: RATING_RESULT
       # script:
        #    $smartRating.callRating();
        
    state: Fallback
        event!: noMatch
        a: Я не понимаю. Но
        go!: /Start

