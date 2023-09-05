theme: /

    state: ВыводФразыАнгл
        event: EngBut
        q!: [~показать|~вывести|покажи|выведи|~сказать|скажи] 
            [~фраза|~выражение]
            [дня]
            [на|по]
            (*англ*)
            
        random:
            a: Показываю
                        
        script:
            var phraseId = getPhraseId();
            showPhraseE(phraseId, $context);
            $temp.EngP = englishP[phraseId].descr;
            
        a: на английском. {{$temp.EngP}}
            
        go!: /ShowButtons