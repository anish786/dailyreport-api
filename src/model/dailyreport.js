import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let DailyReportSchema = new Schema({
  sales: Number,
  salestax: Number,
  otherincome: Number,
  fuelamount: Number,
  dailyloanaccountreceivable: Number,
  delitax: Number,
  moneyfrombank: Number,
  cashcardnonjobber: Number,
  cashcardjobber: Number,
  checkcashedfee: Number,
  moneyorder: Number,
  moneyorderfee: Number,
  moneytransfer: Number,
  moneytransferfee: Number,
  lotterysales: Number,
  lottosales: Number,
  openingcashchecks: Number,
  totalin: Number,
  deposit: Number,
  lottocashes: Number,
  scratchoffcashes: Number,
  creditcardjobber: Number,
  creditcardnonjobber: Number,
  dailyloanchargeaccount: Number,
  foodstamps: Number,
  expenses: Number,
  cashpurchase: Number,
  atm: Number,
  withdrawal: Number,
  closingcashcheck: Number,
  totalout: Number,
  overshort: Number,
  date: Date
});

module.exports = mongoose.model('DailyReport', DailyReportSchema);
