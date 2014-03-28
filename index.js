(function() {
    function Class(props, SuperConstructor) {
        function Constructor() {
            if (props.hasOwnProperty("initialize")) {
                props["initialize"].apply(this, arguments);
            }
            this.constructor = arguments.callee;
        }
        for (var key in props) {
            if (key !== "initialize" && typeof props[key] === "function") {
                Constructor.prototype[key] = props[key];
            }
        }
        if (SuperConstructor) {
            Constructor.prototype = new SuperConstructor();
            Constructor.__super__ = SuperConstructor;
        } else {
            Constructor.__super__ = Object;
        }
        return Constructor;
    }

    module.exports = Class;
})();
