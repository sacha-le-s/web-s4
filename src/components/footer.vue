<template>
  <div class="footer" id="about">
        <footer>
            <ul class="list-inline">
                <li class = "list-inline-item">
                    About me 
                </li>
            </ul>
            <p class="copyright">Sacha CHOUVIN © 2022</p>
        </footer>
    </div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style scoped>
.footer {
    position: relative;
    bottom: 0px;
    margin-top: 20px;
    width: 100%;
    height: 15%;
    background-color: rgba(199, 155, 59, 0.8);
    color: #131E37;
}

.footer ul {
  font-family: "Futura";
  list-style: none;
  text-align: center;
  font-size: 18px;
  line-height: 2.7;
}

.footer li {
  color: inherit;
  text-decoration: underline;
  transition: 200ms;
}
.footer li:hover {
  color: #FFFFFF;
  cursor: pointer;
}

.footer .copyright {
  font-family: "Futura";
  margin-top: 5px;
  text-align: center;
  font-size: 18px;
  color: #131E37;
}
</style>