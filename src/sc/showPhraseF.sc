theme: /

    state: ВыводФразыФранц
        event: FraBut
        q!: [~показать|~вывести|покажи|выведи|~сказать|скажи] 
            [~фраза|~выражение]
            [дня]
            [на|по]
            (*франц*)
            
        random:
            a: Показываю
            
        script:
            var phraseId = getPhraseId();
            showPhraseF(phraseId, $context);
            $temp.FrP = franchP[phraseId].descr;
            
        a: на французском. {{$temp.FrP}}
            
        go!: /ShowButtons