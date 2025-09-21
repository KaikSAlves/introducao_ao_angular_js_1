angular.module("meuModulo").controller("indexController", function($scope) {
    $scope.titulo = "Sistema com Angular JS";
    $scope.alunos = [{
        nome: "Camila",
        email: "camila@gmail.com",
        nota1: 65,
        nota2: 80,
        nota3: 55
    }, {
        nome: "Pedro",
        email: "pedro@gmail.com",
        nota1: 65,
        nota2: 80,
        nota3: 55
    }, {
        nome: "Thiago",
        email: "thiago@gmail.com",
        nota1: 65,
        nota2: 40,
        nota3: 90
    }, ];

    var init = function() {
        $scope.alunos.forEach(aluno => {
            aluno.media = media(aluno);
        });

        $scope.limpaForma();

    }

    var media = function(Aluno) {
        var media = (parseFloat(Aluno.nota1) + parseFloat(Aluno.nota2) + parseFloat(Aluno.nota3)) / 3;
        return media.toFixed(2);
    };

    $scope.addAluno = function(Aluno) {
        Aluno.media = media(Aluno);
        $scope.alunos.push(Aluno);
    }

    $scope.deletarAluno = function(Aluno) {
        for (var index in $scope.alunos) {
            var aux = $scope.alunos[index];
            if (Aluno === aux) {
                $scope.alunos.splice(index, 1);
            }
        }
    }

    $scope.editando = false;
    var alunoEditar;

    $scope.editarAluno = function(Aluno) {
        $scope.editando = true;
        angular.copy(Aluno, $scope.Aluno);
        alunoEditar = Aluno;
    }

    $scope.salvarAluno = function(Aluno) {
        alunoEditar.nome = Aluno.nome;
        alunoEditar.email = Aluno.email;
        alunoEditar.nota1 = Aluno.nota1;
        alunoEditar.nota2 = Aluno.nota2;
        alunoEditar.nota3 = Aluno.nota3;
        alunoEditar.media = media(Aluno);
        $scope.limpaForma();

    }


    $scope.limpaForma = function() {
        $scope.Aluno = {
            nome: "",
            email: "",
            nota1: "",
            nota2: "",
            nota3: "",
            media: ""
        }

        console.log("Limanado formulário: " + $scope.Aluno)
    }

    init();
});