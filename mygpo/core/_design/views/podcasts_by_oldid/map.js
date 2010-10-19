function (doc)
{
    if(doc.doc_type == "Podcast")
    {
        if(doc.oldid)
        {
            emit(doc.oldid, doc);
        }
    }
    else if(doc.doc_type == "PodcastGroup")
    {
        for(i in doc.podcasts)
        {
            if(doc.podcasts[i].oldid)
            {
                emit(doc.podcasts[i].oldid, doc.podcasts[i]);
            }
        }
    }
}