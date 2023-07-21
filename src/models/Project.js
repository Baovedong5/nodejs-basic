const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const customerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    startDate: String,
    endDate: String,
    description: String,
    customerInfo: customerSchema,
    userInfo: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    leadInfo: userSchema,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  },
  {
    timestamps: true,
  }
);

projectSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const Project = mongoose.model("Proect", projectSchema);

module.exports = Project;
