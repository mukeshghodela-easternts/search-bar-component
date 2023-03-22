import { SetStateAction, useEffect, useState } from "react"
import questions from '../data/questions'
interface Data {
  searchResult: searchRes[]
  typedVal: string
}
interface searchRes {
  category: string
  question: string
  link: string
}
function SearchBar() {
    const [inputValue, setInputValue] = useState('')
    const [searchResults, setSearchResults] = useState<searchRes[]>([]);

    const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
        const val = (event.target as HTMLInputElement).value
        if (val != '') {
            let filteredQuestions = questions.filter((obj) => obj?.question.toLowerCase().replace('and', '&').includes(val.toLowerCase().replace('and', '&')) || obj?.category.toLowerCase().replace('and', '&').includes(val.toLowerCase().replace('and', '&')))
            setSearchResults(filteredQuestions as searchRes[])
        } else {
            setSearchResults([])
        }
    };

    useEffect(() => {
        document.addEventListener('click', (e: any) => {
            if (!e.target.closest('.m-search-results') && !e.target.closest('.m-searchWidget')) {
                setSearchResults([])
            }
        })
    }, [])


    return (
        <div className="full-bleed">
            <div className="o-search-container">
                <h1 className="H1Bold38">Hi, how can we help?</h1>
                <fieldset className="m-searchWidget">
                    <input type="text" placeholder="Search help centre" value={inputValue} onChange={handleInputChange} />
                    <span className="a-searchIcon"></span>
                </fieldset>
                {/* <div className="m-search-results" v-if="searchItems.length > 0">
                    <p className="a-result-title PBold14">Top article suggestions</p>
                    <div className="a-result-link" v-for="(res, index) in searchItems" :key="index">
                    <router-link :to="{ path: res.link }">
                        <div v-html="res.question"></div>
                    </router-link>
                    </div>
                </div>*/}
            </div> 
        </div>
    )
}

export default SearchBar
