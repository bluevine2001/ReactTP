import { useState } from "react";
import Navbar from "./components/Navbar";
const App = () => {
  const [myVariable, setMyVariable] = useState(0); // const[var, set] = useState(valeur initiale);
  const myBoolean = true;
  //const test = (test) => test * 3;
  const tableau = [1, 10, 5, 8];
  const words = ["Bonjour", "Cascade", "Style", "Css", "HTML"];
  const brickedtab = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ];
  const dupes = [1, 1, 2, 3, 4, 4];
  //let myVariable = 0;

  const onClickHandler = () => {
    //alert("Working");
    setMyVariable((current) => {
      return current + 1;
    });
    console.log(myVariable);
  };

  const findLargestNumber = (tableau) => {
    console.log("largest num : ", Math.max(...tableau));
    return Math.max(...tableau);
  };

  const sortWords = (words) => {
    console.log("words : ", words.sort());
    return words.sort();
  };

  const countOccurrences = (str, chr) => {
    let cpt = 0;
    for (const c of str) {
      if (c.includes(chr)) {
        cpt++;
      }
    }
    console.log("occurrences : ", cpt);
    return cpt;
  };

  const removeDupes = (tab) => {
    let set = new Set();
    for (const elem of tab) {
      set.add(elem);
    }
    console.log([...set]);
    return [...set];
  };

  const flattenArray = (tab) => {
    //return tab.flat();
    console.log("flat : ", tab.flat());
    return [...tab];
  };

  const swapVariables = (x, y) => {
    console.log("before x = ", x, " y = ", y);
    [x, y] = [y, x];
    console.log("after x = ", x, " y = ", y);
    return [x, y];
  };

  const parseObject = (obj) => {
    let tab = [];
    Object.keys(obj).map((key) => {
      tab.push(obj[key]);
      return 0;
    });

    console.log([...tab]);
    return [...tab];
  };

  const mergeObjects = (obj1, obj2) => {
    let target = { ...obj1, ...obj2 };
    console.log("merge : ", target);
  };

  const sumArray = (tab) => {
    let cpt = 0;
    for (const num of [...tab]) {
      cpt += num;
    }
    console.log("sum : ", cpt);
    return cpt;
  };

  const sortObject = (obj) => {
    let tab = [];
    let temptab = [];

    for (const entrie of Object.entries(obj)) {
      temptab.push([...entrie]);
      //tab.push(Object.fromEntries(temptab));
    }
    console.log("temptab : ", temptab);
    tab = temptab.sort();
    //for (let i = 0; i < tab.length; i++) {
    tab = new Map(tab);
    //tab[i] = Object.fromEntries(tab[i]);
    //}
    console.log("sorted tab : ", tab);
  };

  flattenArray(brickedtab);
  countOccurrences("coucou", "c");
  findLargestNumber(tableau);
  sortWords(words);
  removeDupes(dupes);
  swapVariables(5, 8);
  parseObject({ test: "hello", hello: "test", num: 4 });
  mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });
  sumArray([1, 2, 3, 4]);
  sortObject({ b: 2, a: 1, c: 3 });
  return (
    <>
      <Navbar></Navbar>
      <div className="">App.js</div>
      <div className="">App.js</div>
      <button onClick={onClickHandler}> click me !</button>
      {myBoolean ? <div>Bonjour</div> : <div>Au revoir!</div>}
      {!myBoolean && <div>bonjour</div>}
      {[<p>45</p>, "test", "bonjour"]}
      <br />
      {myVariable}
    </>
  );
};

export default App;
