angular.module("listaTelefonica").controller("detalhesContatoCtrl", function($scope,$routeParams,contatosAPI) {
    console.log($routeParams.id)
    
    contatosAPI.getContato($routeParams.id)
});