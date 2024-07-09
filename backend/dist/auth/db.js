"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const url = 'mongodb://localhost:27017/';
const userSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true }
});
const User = mongoose_1.default.model('User', userSchema);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(url);
            console.log('db connected');
            const newUser = new User({
                username: 'Nishant',
                password: '1234',
                email: 'vnishant.2004@gmail.com',
            });
            const saveUser = yield newUser.save();
            console.log('user saved');
        }
        catch (error) {
            console.log(error);
        }
    });
}
main();
