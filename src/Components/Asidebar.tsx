import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDisptch, RootState } from "../redux/app/store";
import { setFilter, setSort } from "../redux/features/filter/filter";

type Props = {};

const Asidebar = (props: Props) => {
  const { sort, filter } = useSelector((state: RootState) => state.filter);
  const dispatch: AppDisptch = useDispatch();
  return (
    <aside className="min-h-screen w-[200px]	">
      <div className="font-mono fixed">
        <div className="my-4">
          <h4 className="text-lg font-semibold">Sort</h4>
          <select
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            onChange={(e) => dispatch(setSort(e.target.value))}
            defaultValue={sort}
          >
            <option value="default">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4 className="text-lg font-semibold">Filter</h4>
          <div className="radio-group">
            {/* <!-- handle filter on button click --> */}
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-all"
                className=" mx-2"
                onClick={() => dispatch(setFilter("all"))}
              />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-saved"
                className=" mx-2"
                onClick={() => dispatch(setFilter("saved"))}
              />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Asidebar;
