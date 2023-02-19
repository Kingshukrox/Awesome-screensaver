// https://api.quotable.io/random
import axios from "axios";
import { useState,useEffect } from "react";
import { QuoteContainer, QuoteData } from "./QuoteStyle";

const quoteUrl='https://api.quotable.io/random'

function Quote() {
    const [quote,setQuote]=useState(null);
    useEffect(() => {
        axios.get(quoteUrl)
        .then(res=>setQuote(res.data))
        .catch(err=>console.log(err))
    }, []);
    return ( <QuoteContainer>
        <QuoteData>{quote!=null?quote.content:null}</QuoteData>
        <QuoteData>-{quote!=null?quote.author:null}</QuoteData>
    </QuoteContainer> );
}

export default Quote;