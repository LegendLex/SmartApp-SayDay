theme: /

    state: ВыводФразыНемец
        event: GerBut
        q!: [~показать|~вывести|покажи|выведи|~сказать|скажи] 
            [~фраза|~выражение]
            [дня]
            [на|по]
            (*немец*)
            
        random:
            a: Показываю
            
        script:
            var phraseId = getPhraseId();
            showPhraseG(phraseId, $context);
            $temp.GeP = germanP[phraseId].descr;
            
        a: на немецком. {{$temp.GeP}}
            
        go!: /ShowButtons