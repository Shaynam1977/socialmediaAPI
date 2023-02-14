const { Schema, model } = require('mongoose');

// Schema to create a course model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required:true,
      match:[/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, "you need a valid email"]
    },
    
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thoughts',
      },
      
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
    ]
  },

  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
userSchema.virtual("friendCount").get(function(){
  return this.friends.length
})
const User = model('users', userSchema);

module.exports = User;
