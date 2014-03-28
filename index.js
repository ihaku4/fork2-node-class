(function() {
    function Class(props, SuperConstructor) {
        function Constructor() {
            if (props.hasOwnProperty("initialize")) {
                props["initialize"].apply(this, arguments);
            }
            this.constructor = arguments.callee;
            this["super"] = function(method) {
                if (SuperConstructor && SuperConstructor.prototype[method]) {
                    SuperConstructor.prototype[method].apply(this, Array.prototype.slice.call(arguments, 1));
                } else if (Object.prototype[method]) {
                    Object.prototype[method].apply(this, Array.prototype.slice.call(arguments, 1));
                }
            }
        }
        for (var key in props) {
            if (key !== "initialize" && typeof props[key] === "function") {
                Constructor.prototype[key] = props[key];
            }
        }
        if (SuperConstructor) {
            Constructor.prototype = new SuperConstructor();
        } // else Constructor.prototype is Constructor ?
        Constructor.__super__ = SuperConstructor || Object;
        return Constructor;
    }

    module.exports = Class;
})();
