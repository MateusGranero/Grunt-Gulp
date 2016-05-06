angular.module("listaTelefonica").directive("uiAlert",function(){
   return{
       templateUrl:"view/alert.html",
       replace: true, //Caso não seja informado recebe false e coloca o seu template dentro do elemento externo
       restrict : "E", //Retrições A- Atributo de um elemento  E- Elemento  C- Classe do elemento  M-Comentario do elemento
       scope:{
           title: "@" //quando chave e valor tiverem o mesmo nome pode-se usar só @ para referenciar, caso contrario é necessário passar @nome
           //message: "=" // o sinal de '=' faz um vinculo bidirecional entre os escopos a regra do @ vale também para o =
       },
        transclude: true //encapsula conteudo
    }; 
});