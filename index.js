(function() {
    function Class(props) {
        function Constructor() {
            for (var key in props) {
                if (typeof props[key] !== "function") {
                    continue;
                }
                if (key === "initialize") {
                    props[key].apply(this, arguments);
                } else {
                    this[key] = props[key];
                }
            }
        }
        return Constructor;
    }

    module.exports = Class;
})();
