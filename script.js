AOS.init();

new TypeIt("#bio", {
    speed: 25,
    loop: false
}).type("salu moi c peri je suis le mec le plus drole de lunivers", { delay: 300 })
.move(-0)
.type(" et de lespace entier")
.move(+21)
.type(" (vraiment) ")
.move(-20)
.type("(jai jurer)")

.go();