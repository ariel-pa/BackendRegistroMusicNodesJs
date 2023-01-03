const {check} = require("express-validator");//chekar datos
const {validateResults} = require("../utils/handleValidator");

const validatorCreateItem = [
    check("name")
    .exists()
    .notEmpty(),
    // .isLength({min: 5, max: 90})//determinar logintud si se requiere
    check("album")
    .exists()
    .notEmpty(),

    check("cover")
    .exists()
    .notEmpty(),

    check("artist")
    .exists()
    .notEmpty(),
    check("artist.name")
    .exists()
    .notEmpty(),
    check("artist.nickname")
    .exists()
    .notEmpty(),
    check("artist.nationality")
    .exists()
    .notEmpty(),

    check("duration")
    .exists()
    .notEmpty(),
    check("duration.start")
    .exists()
    .notEmpty(),
    check("duration.end")
    .exists()
    .notEmpty(),

    check("mediaId")
    .exists()
    .notEmpty(),
    (req, res, next)=> validateResults(req, res, next)//
];

const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty(),
    (req, res, next)=> validateResults(req, res, next)//

];

module.exports = {validatorCreateItem, validatorGetItem};