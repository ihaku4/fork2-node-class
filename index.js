(function() {
    function Class(props) {
        function Constructor() {
            if (props.hasOwnProperty("initialize")) {
                props["initialize"].apply(this, arguments);
            }
        }
        for (var key in props) {
            if (key !== "initialize" && typeof props[key] === "function") {
                Constructor.prototype[key] = props[key];
            }
        }
        return Constructor;
    }

    module.exports = Class;
})();
