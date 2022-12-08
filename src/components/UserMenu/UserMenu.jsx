import {
  TrophyActive,
  UserMenuWrapper,
  LogOutBtn,
} from "./UserMenu.styled";
import logout from "./images/logout.svg";

const isActive = true; // add logic from backend

export const UserMenu = () => {
  return (
    <UserMenuWrapper>
      <TrophyActive isActive={isActive}>
        <svg width="14" height="14">
          <path d="M13.5898 1.01044H11.7933C11.7998 0.811453 11.8034 0.611287 11.8034 0.410159C11.8034 0.18361 11.6197 0 11.3933 0H2.60684C2.38029 0 2.19669 0.18361 2.19669 0.410159C2.19669 0.611287 2.20021 0.811453 2.20673 1.01044H0.410156C0.183609 1.01044 0 1.19406 0 1.4206C0 3.25842 0.480331 4.9923 1.35245 6.303C2.21452 7.59874 3.36285 8.34194 4.60326 8.41425C4.88449 8.72027 5.18185 8.96978 5.4915 9.16012V10.9831H4.80342C3.97157 10.9831 3.29492 11.6598 3.29492 12.4916V13.1797H3.26576C3.03922 13.1797 2.85561 13.3634 2.85561 13.5898C2.85561 13.8164 3.03922 14 3.26576 14H10.7342C10.9608 14 11.1444 13.8164 11.1444 13.5898C11.1444 13.3634 10.9608 13.1797 10.7342 13.1797H10.7051V12.4916C10.7051 11.6598 10.0283 10.9831 9.19658 10.9831H8.5085V9.16012C8.81815 8.96978 9.1154 8.72027 9.39664 8.41425C10.6371 8.34194 11.7854 7.59874 12.6476 6.303C13.5197 4.9923 14 3.25842 14 1.4206C14 1.19406 13.8163 1.01044 13.5898 1.01044ZM2.0354 5.84862C1.31602 4.76746 0.893372 3.35359 0.828964 1.83076H2.25255C2.40048 3.70276 2.8399 5.43301 3.5267 6.80662C3.63608 7.02537 3.75047 7.23194 3.86914 7.42666C3.18694 7.16903 2.55557 6.63048 2.0354 5.84862ZM11.9646 5.84862C11.4444 6.63048 10.8131 7.16903 10.1309 7.42666C10.2496 7.23194 10.3639 7.02537 10.4733 6.80662C11.1601 5.43301 11.5994 3.70276 11.7475 1.83076H13.171C13.1066 3.35359 12.684 4.76746 11.9646 5.84862Z" />
        </svg>
      </TrophyActive>
      <LogOutBtn>
        <img src={logout} alt="Log Out" width="21.58"></img>
      </LogOutBtn>
    </UserMenuWrapper>
  );
};