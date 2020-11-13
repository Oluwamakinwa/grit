export default {
  methods: {
    splitArray: function(splitAt, array) {
      let groups = [];
      let intermediate = [];
      array.forEach(teamMember => {
        intermediate.push(teamMember);
        if (intermediate.length === splitAt) {
          groups.push(intermediate);
          intermediate = [];
        }
      });
      if (intermediate.length) groups.push(intermediate);
      return groups;
    }
  }
};
