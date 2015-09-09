var Task = function(args) {
  this.name = args.name;
  this.done = !!args.done;
  this.createdAt = new Date();
};
