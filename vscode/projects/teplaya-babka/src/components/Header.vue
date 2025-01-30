<template>
  <header>
    <div class="logo">
      <div class="container">
        <router-link to="/">
          <img src="../assets/img/logo.svg" alt="ТеплыйДед" />
        </router-link>
      </div>
    </div>
  </header>
</template>

<style>
header {
  background-color: #111111;
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 45px;
  padding: 5px 20px;
  width: 100%;
  top: 0;
  position: absolute;
  z-index: 10000;
}

header .logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  height: 100%;
}

header a {
  text-decoration: none;
  color: #f1f1f1;
  display: inline-block;
  height: fit-content;
}

header nav {
  display: flex;
  justify-content: space-between;
}

header nav ul {
  display: flex;
  width: max-content;
  list-style: none;
  font-size: 1.5rem;
  margin: 0px 0;
}

header nav ul li {
  margin: 0 10px;
}

header nav ul li a {
  color: #f1f1f1;
  text-decoration: none;
}

header nav ul li a:hover {
  color: #ccc;
}

.logo img {
  width: 125px;
  height: auto;
}

.logo a {
  display: flex;
  align-items: center;
}

.search-modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
}

.search-modal-content input {
  padding: 10px 25px;
  border: none;
  border-radius: 10px;
  background-color: #33333386;
  color: #eee;
  box-sizing: border-box;
  line-height: 16px;
  font-size: 16px;
  width: 500px;
  outline: none;
}

.search-modal-content input::placeholder {
  color: #777;
}

.search-modal-content button {
  border: none;
  border-radius: 10px;
  padding: 10px 15px;
  background-color: #ff474786;
  color: white;
  width: 60px;
  height: 40px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 5px;
}

.search-modal-content button:hover {
  background-color: #ff4747c2;
}

.search-modal-content button img {
  width: 20px;
  height: auto;
}
</style>
