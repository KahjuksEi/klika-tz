import React from "react";
import * as axios from "axios";
import classes from "./Tracks.module.css";
import ava from "../assets/images/profile-user.png";

class Tracks extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setTracks(response.data.items);
        this.props.setTotalTracksCount(response.data.totalCount);
      });
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setTracks(response.data.items);
      });
  };

  onPageSizeChanged = (showQuantity) => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${showQuantity}`
      )
      .then((response) => {
        this.props.setTracks(response.data.items);
      });
  };

  reverseData = () => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users`)
      .then((response) => {
        this.props.setTracks(response.data.items);
        this.props.reverseData(response.data.items);
      });
  };

  filterByInput(e) {
    let input = e.target.value;
    this.props.setFilterByValue({ value: input });
  }

  render() {
    let pagesCount = Math.ceil(
      this.props.totalTracksCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <table cellspacing="2" border="1" cellpadding="5">
          <tr className={classes.titles}>
            <td
              onClick={(e) => {
                this.reverseData();
              }}
            >
              User ID
            </td>
            <td
              onClick={(e) => {
                this.reverseData();
              }}
            >
              Avatar
            </td>
            <td
              onClick={(e) => {
                this.reverseData();
              }}
            >
              Name
            </td>
            <td
              onClick={(e) => {
                this.reverseData();
              }}
            >
              URL
            </td>
          </tr>
          {this.props.tracks.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>
                <img
                  className={classes.img}
                  src={u.photos.small != null ? u.photos.small : ava}
                  alt="user"
                />
              </td>
              <td>{u.name}</td>
              <td>
                {u.uniqueUrlName != null ? u.uniqueUrlName.small : "NO URL"}
              </td>
            </tr>
          ))}
        </table>

        <div className={classes.control}>
          <p>Фильтр:</p>
          <input
            onChange={(e) => {
              this.filterByInput(e);
            }}
            placeholder="Введите параметр"
            type="text"
          />
        </div>

        <div className={classes.sortby}>
          <p>Показывать по:</p>
          <span
            onClick={(e) => {
              this.onPageSizeChanged(10);
            }}
          >
            10
          </span>
          <span
            onClick={(e) => {
              this.onPageSizeChanged(25);
            }}
          >
            25
          </span>
          <span
            onClick={(e) => {
              this.onPageSizeChanged(50);
            }}
          >
            50
          </span>
          <span
            onClick={(e) => {
              this.onPageSizeChanged(100);
            }}
          >
            100
          </span>
        </div>

        <div className={classes.nums}>
          {pages.map((p) => {
            return (
              <span
                className={this.props.currentPage === p && classes.selected}
                onClick={(e) => {
                  this.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Tracks;
