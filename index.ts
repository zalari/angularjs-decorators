export const LegacyComponent = function(options: ng.IComponentOptions): Function {
    return (controller: Function) => {
        return angular.extend(options, {controller});
    };
};
