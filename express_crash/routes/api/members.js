const express = require("express");
let members = require("../../Members");
const uuid = require("uuid");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(members);
});

// get single member
router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id == parseInt(req.params.id));

  if (found) {
    res.json(members.filter((member) => member.id == parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// Create Member
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "Active",
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please include a name and an email." });
  }

  members.push(newMember);
  res.redirect("/");
});

router.put("/:id", (req, res) => {
  const found = members.some((member) => member.id == parseInt(req.params.id));

  if (found) {
    const updatedData = req.body;
    members.forEach((member) => {
      if (member.id == parseInt(req.params.id)) {
        member.name = updatedData.name ? updatedData.name : member.name;
        member.email = updatedData.email ? updatedData.email : member.emai;

        res.json({ msg: "Member Updated", member });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with ${id}.` });
  }
});

router.delete("/:id", (req, res) => {
  const found = members.some((member) => member.id == parseInt(req.params.id));

  if (found) {
    res.json({
      msg: "Member deleted",
      members: members.filter((member) => member.id != parseInt(req.params.id)),
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

module.exports = router;
