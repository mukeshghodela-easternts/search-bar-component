import { useState } from "react"
import questions from '../data/questions'
function SearchBar() {
  const [count, setCount] = useState(0)

  return (
    <div class="full-bleed">
    <div class="o-search-container">
      <h1 class="H1Bold38">Hi, how can we help?</h1>
      <fieldset class="m-searchWidget">
        <input type="text" placeholder="Search help centre" @keyup="searchQuestion" v-model="typedVal" />
        <span class="a-searchIcon"></span>
      </fieldset>
      <div class="m-search-results" v-if="searchItems.length > 0">
        <p class="a-result-title PBold14">Top article suggestions</p>
        <div class="a-result-link" v-for="(res, index) in searchItems" :key="index">
          <router-link :to="{ path: res.link }">
            <div v-html="res.question"></div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SearchBar
