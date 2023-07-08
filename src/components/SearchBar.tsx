import { SetStateAction, useEffect, useState, useRef } from 'react';
import questions from '../data/questions';
import { Link } from 'react-router-dom';
import { YouTube } from '@mui/icons-material';
import { ArrowDownward } from '@mui/icons-material';
import { ArrowDropDown } from '@mui/icons-material';

interface searchRes {
  category: string;
  question: string;
  link: string;
}

function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const componentRef = useRef<any>(null);

  useEffect(() => {
    const handleOutsideClick = (event: { target: any }) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleInputChange = (event: any) => {
    // setInputValue(event.target.value);
    // const val = (event.target as HTMLInputElement).value;
    // if (val != '') {
    //   let filteredQuestions = questions.filter(
    //     obj =>
    //       obj?.question
    //         .toLowerCase()
    //         .replace('and', '&')
    //         .includes(val.toLowerCase().replace('and', '&')) ||
    //       obj?.category
    //         .toLowerCase()
    //         .replace('and', '&')
    //         .includes(val.toLowerCase().replace('and', '&'))
    //   );
    //   setSearchResults(filteredQuestions as searchRes[]);
    // } else {
    // }
  };

  const searchItems = (): any => {
    return questions.map((el: any, index) => {
      const txtIndex = el.question
        .toLowerCase()
        .indexOf(inputValue.toLowerCase());
      const txtLenght = inputValue.length;
      return true ? (
        <div className="a-result-link" key={index}>
          <Link to={el.link}>
            <span className="searchResult">
              {el.question.slice(0, txtIndex)}
              <span className="boldText">
                {el.question.slice(txtIndex, txtIndex + txtLenght)}
              </span>
              {el.question.slice(txtIndex + txtLenght)} -
            </span>
            <span className="searchCategory desktop-down">{el.category}</span>
            <span className="searchCategory desktop-up">{el.category}</span>
          </Link>
        </div>
      ) : (
        <div className="a-result-link test" key={index}>
          <Link to={el.link}>
            <span className="searchResult">{el.question} -</span>
            <span className="searchCategory desktop-down"> {el.category}</span>
            <span className="searchCategory desktop-up">{el.category}</span>`
          </Link>
        </div>
      );
    });
  };

  return (
    <div className="full-bleed">
      <div className="o-search-container">
        <h1 className="H1Bold38">Faqs</h1>
        <div ref={componentRef}>
          <fieldset className="m-searchWidget">
            <input
              type="text"
              placeholder="Faqs"
              value={inputValue}
              onFocus={() => setIsOpen(true)}
              // onBlur={() => setIsOpen(false)}
            />

            {/* <ArrowDownward></ArrowDownward> */}
            <span className="a-searchIcon">
              <ArrowDropDown className="a-searchIcon"></ArrowDropDown>
            </span>
            {/* <span className="a-searchIcon"></span> */}
          </fieldset>
          {isOpen && (
            <div className="m-search-results">
              {searchItems().map((el: any) => el)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
