const { express, jwt, z } = require("library");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();

app.use(express.json());

app.use('/users', userRouter)
app.use('/courses', courseRouter)
app.use("/admin", adminRouter);

app.listen(3000);
