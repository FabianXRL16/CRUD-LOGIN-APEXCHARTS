<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@300;400&display=swap');
:root {
  font-family: 'Catamaran', sans-serif;
  --bg-primary: #f66763;
  --bg-secondary: #242a38;
  --bg-dark-grey: #2e374d;
  --bg-white: #edf1fd;
  --bg-purple: #6379f6;
  color: var(--bg-white);
}
body {
  background-color: var(--bg-secondary);
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 10vh 10vw;
}
h2, p {
  margin: 0px;
}
input, button {
  outline: none;
  border: none;
}
button{
  transition: .3s;
}
button:hover {
  filter: brightness(130%);
  transition: .3s;
}
@media screen and (min-width: 870px) {
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
  }
}
</style>
