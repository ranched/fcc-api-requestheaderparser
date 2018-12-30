exports.requestHeaderParser = (req, res) => {
  const resObj = {
    "ipaddress": req.ip,
    "language": req.header('Accept-Language'),
    "software": req.header('User-Agent')
  }
  
  res.json(resObj);
}

