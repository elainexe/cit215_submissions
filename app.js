Vue.component('codenames', {
    props:['name','codename'],
    data:function(){

        return{
            toggle:false,
            count:0
        }
    },
    template:'<div v-on:click="tog()"><div v-bind:class="{hide:toggle}">{{name}}</div><div v-bind:class="{hide:!toggle}">{{codename}}</div></div>',
    methods: {
        tog(){
            if(this.toggle)
                this.toggle=false;
            else
                this.toggle=true;
        }
    }
})

let app=new Vue({
    el:"#app",
    data: {
        nameInput:"",
        emailInput:"",
        message: "",
        submitted: "Not submitted",
        nameValid:false,
        emailValid:false,
        ch:"",
        chars:[
            {
                name:"Protagonist",
                codename:"Joker"
            },
            {
                name:"Anne",
                codename:"Panther"
            },
            {
                name:"Ryuji",
                codename:"Skull"
            }
        ],
        list:[{mess:"You clicked",test:"1"}, {mess:"clicked it",test:"2"}, {mess:"You person have clicked",test:"3"} ]
    },
    watch:{
        nameInput:function(){
            if(this.nameInput.length<2){
                this.message="Name must have at least two characters.";
                this.nameValid=false;
                this.valid();
            }
            else{
                this.message="";
                this.nameValid=true;
                this.valid();
            }
        },
        emailInput:function(){
            let atSplit=this.emailInput.split("@");
            if(atSplit.length!==2){ //has to have one @
                this.message="Invalid email--needs one @";
                this.emailValid=false;
                this.valid();
                return;
            }
            if(atSplit[1].length<3||atSplit[0].length<1){ //has to have something on each side of @
                this.message="Invalid email--needs domain";
                this.emailValid=false;
                this.valid();
                return;
            }
            let dotSplit=atSplit[1].split("."); //checking that there's a ".com"
            if(dotSplit.length<2){ //can be more than 2 since a period is valid throughout emails
                this.message="Invalid email--needs a period for domain";
                this.emailValid=false;
                this.valid();
                return;
            }
            if(dotSplit[dotSplit.length-1].length<2){ //checking that the last segment, ".com" or whatever, is long enough
                this.message="Invalid email--domain length";
                this.emailValid=false;
                this.valid();
                return;
            }
            this.message="";
            this.emailValid=true;
            this.valid();
        }
    },
    methods:{
        valid(){
            if(this.emailValid&&this.nameValid){
                this.submitted="Submitted";
            }
            else{
                this.submitted="Not submitted";
            }
        }
    }
});
