(function () {

    angular.module('umbraco')
        .controller('infocaster.icomoonpanelcontroller', ['$scope', icomoonPanelController]);

    function icomoonPanelController($scope) {

        const $this = this;
        $this.close = close;
        $this.select = select;
        $this.icons = [];

        function close() {

            $scope.model.close();
        }

        function select(icon) {

            $scope.model.submit(icon);
        }

        function init() {

            var iconElement = document.body.firstChild;
            iconElement.querySelectorAll("symbol").forEach(function (s) {
                $this.icons.push(s.id);
            })
        }

        init();
    }
})()