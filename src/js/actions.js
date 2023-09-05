function showPhraseE(id, context){
    addAction({
        type: "show_phrase",
        titleE: englishP[id].title,
        phonE: englishP[id].phon,
        descrE: englishP[id].descr,
        titleF: franchP[id].title,
        descrF: franchP[id].descr,
        phonF: franchP[id].phon,
        titleG: germanP[id].title,
        descrG: germanP[id].descr,
        phonG: germanP[id].phon,
        lang: 0,
    }, context);
}

function showPhraseF(id, context){
    addAction({
        type: "show_phrase",
        titleE: englishP[id].title,
        phonE: englishP[id].phon,
        descrE: englishP[id].descr,
        titleF: franchP[id].title,
        descrF: franchP[id].descr,
        phonF: franchP[id].phon,
        titleG: germanP[id].title,
        descrG: germanP[id].descr,
        phonG: germanP[id].phon,
        lang: 1,
    }, context);
}

function showPhraseG(id, context){
    addAction({
        type: "show_phrase",
        titleE: englishP[id].title,
        phonE: englishP[id].phon,
        descrE: englishP[id].descr,
        titleF: franchP[id].title,
        descrF: franchP[id].descr,
        phonF: franchP[id].phon,
        titleG: germanP[id].title,
        descrG: germanP[id].descr,
        phonG: germanP[id].phon,
        lang: 2,
    }, context);
}

function getPhraseId(){
    var today = new Date();
    return today.getDate();
}