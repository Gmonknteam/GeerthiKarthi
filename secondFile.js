alert("second file");
if(err)
{
  res.send("error while getting details");
}
else
{
  res.send(data);
}
