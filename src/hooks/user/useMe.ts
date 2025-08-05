import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/api/user.api";
import { useAppDispatch } from "@/store/hooks";
import { useEffect } from "react";
import type { User } from "@/types/user.types";
import { setUser, setAuthLoading } from "@/store/slices/authSlice";

interface MeResponse {
  user: User;
}

export const useMe = () => {
  const dispatch = useAppDispatch();

  const query = useQuery<MeResponse, Error>({
    queryKey: ["me"],
    queryFn: getMe,
    retry: false,
  });

  useEffect(() => {
    if (query.isFetching) {
      dispatch(setAuthLoading(true));
    } else {
      dispatch(setAuthLoading(false));
    }

    if (query.isSuccess && query.data) {
      dispatch(setUser(query.data.user));
    }
  }, [query.isFetching, query.isSuccess, query.data, dispatch]);

  return query;
};
