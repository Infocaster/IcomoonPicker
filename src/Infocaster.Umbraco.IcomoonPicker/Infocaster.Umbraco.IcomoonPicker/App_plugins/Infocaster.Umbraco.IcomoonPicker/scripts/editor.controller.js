(function () {

    angular.module('umbraco')
        .controller('infocaster.icomooneditorcontroller', ['editorService', 'assetsService', '$http', '$scope', icomoonEditorController]);

    function icomoonEditorController(editorService, assetsService, $http, $scope) {

        const $this = this;
        $this.edit = edit;

        function edit() {

            const options = {
                title: 'Select icon from icomoon',
                view: '/app_plugins/Icomoon/views/panel.html',
                size: 'small',
                submit: submit,
                close: close,
                value: $scope.model.value
            }

            editorService.open(options);
        }

        function submit(value) {

            $scope.model.value = value;
            close();
        }

        function close() {

            editorService.close();
        }

        function init() {

            assetsService.loadJs(`https://i.icomoon.io/public/${$scope.model.config.projectCode}/${$scope.model.config.projectName}/svgxuse.js`);

            if (typeof $scope.model.value !== 'string') {

                $scope.model.value = '';
            }

            const svg = document.querySelector('body>svg');
            if (!svg) {

                $http.get(`/umbraco/backoffice/icomoon/files/svg?code=${$scope.model.config.projectCode}&project=${$scope.model.config.projectName}`)
                    .then(function (data) {
                        const element = document.createElement("div");
                        document.body.insertBefore(element, document.body.firstChild);
                        element.outerHTML = data.data;
                    })
            }
        }

        init();
    }
})()