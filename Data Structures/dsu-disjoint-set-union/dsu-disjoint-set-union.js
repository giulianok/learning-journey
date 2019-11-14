/*
SOURCES
https://leetcode.com/articles/redundant-connection/
*/

function DSU() {
  const parents = [];
  const rank = [];

  const find = x => {
    if (parents[x] != null) {
      if (parents[x] < 0) {
        return x;
      } else {
        return find(parents[x]);
      }
    } else {
      parents[x] = -1;
      return x;
    }
  };

  const union = (x, y) => {
    let xr = find(x);
    let yr = find(y);

    if (xr === yr) {
      return false;
    } else if (rank[xr] < rank[yr]) {
      parents[xr] = yr;
    } else if (rank[xr] > rank[yr]) {
      parents[yr] = xr;
    } else {
      parents[yr] = xr;
      rank[xr]++;
    }

    return true;
  };

  return {
    find,
    union,
    getParents: () => parents
  };
}

module.exports = DSU;
