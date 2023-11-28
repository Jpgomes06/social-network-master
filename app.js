require("express-async-errors");
const express = require("express");
const errorHandler = require("./middlewares/error");
const app = express();
app.use(express.json());

const userRouter = require("./routes/userRoutes");
const friendshipRouter = require("./routes/friendshipRoutes");
const filetypeRouter = require("./routes/filetypeRouter");
const targetpublicRouter = require("./routes/targetpublicRoutes");
const albumRouter = require("./routes/albumRouter");
const postRouter = require("./routes/postRouter");
const albumitemRouter = require("./routes/albumitemRouter");
const reactionstypeRouter = require("./routes/reactionstypeRouter");
const reactionsRouter = require("./routes/reactionsRouter");
const commentsRouter = require("./routes/commentsRouter");

app.use('/users', userRouter); 
app.use('/friendship', friendshipRouter);
app.use('/file_type', filetypeRouter);
app.use('/target_public', targetpublicRouter);  
app.use('/album', albumRouter); 
app.use('/post', postRouter); 
app.use('/album_item', albumitemRouter); 
app.use('/reactions_type', reactionstypeRouter); 
app.use('/reactions', reactionsRouter); 
app.use('/comments', commentsRouter); 
app.use('/', userRouter)

app.use(errorHandler);

app.listen(8080, () => { 
  console.log("Server running at port 8080: http://localhost:8080");
});
