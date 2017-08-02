<body>
        <h1>HELLO WORLD</h1>
        <script>
            function Ninja(name){
                var speed = 3;
                var strength = 3;
                this.name = name;
                this.health = 100;
                this.sayName = function(){
                    console.log('My ninja name is ' + this.name);
                }
                this.showStats = function(){
                    console.log('Strength: ' + strength + ' Speed: ' + speed + ' Health: ' + this.health);
                } 
                this.drinkSake = function(){
                    this.health += 10;
                }
            }  
            var ninja1 = new Ninja('Erick');
            ninja1.sayName();
            ninja1.showStats();
            ninja1.drinkSake();
            ninja1.showStats();
        </script>
    </body>